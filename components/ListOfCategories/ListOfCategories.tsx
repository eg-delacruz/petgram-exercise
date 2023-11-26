import { useState, useEffect, memo } from 'react';

//styles
import {
  List,
  FixedList,
  ListItem,
  SkeletonCategoryContainer,
  SkeletonCategory,
  SkeletonEmoji,
} from './Styles';

//Components
import Category from '@components/Category/Category';

//Hooks
import useFetchingData from '@hooks/useFetchingData';

//Types
//Localtypes
type CategoryType = {
  id: string;
  cover: string;
  emoji: string;
  path: string;
};

const ListOfCategoriesComponent = () => {
  //States
  const { data, loading, error } = useFetchingData({
    API: process.env.NEXT_PUBLIC_API || '',
  });
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      //Returns boolean
      const newShowFixed = window.scrollY > 170;
      //If newShowFixed is different from showFixed, then setShowFixed receives the new value
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    //Execut the scroll function on scroll event
    document.addEventListener('scroll', onScroll);

    //Remove the event listener if the component is unmounted
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  return (
    <>
      {/* We have two list components, the normal one and the fixed one */}
      <FixedList $fixed={showFixed ? showFixed : undefined}>
        {loading ? (
          <>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <ListItem key={index}>
                  <SkeletonCategory />
                </ListItem>
              ))}
          </>
        ) : (
          data.map((category: CategoryType) => (
            <ListItem key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </ListItem>
          ))
        )}
      </FixedList>

      <List $fixed={showFixed ? showFixed : undefined}>
        {loading ? (
          <>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <SkeletonCategoryContainer key={index}>
                  <SkeletonCategory />
                  <SkeletonEmoji />
                </SkeletonCategoryContainer>
              ))}
          </>
        ) : (
          data.map((category: CategoryType) => (
            <ListItem key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </ListItem>
          ))
        )}
      </List>
    </>
  );
};

export const ListOfCategories = memo(ListOfCategoriesComponent);
