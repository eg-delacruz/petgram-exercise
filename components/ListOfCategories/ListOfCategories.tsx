import { useState, useEffect, memo } from 'react';

//styles
import { List, ListItem, SkeletonCategory } from './Styles';

//Components
import Category from '@components/Category/Category';

//Hooks
import useFetchingData from '@hooks/useFetchingData';

//Types
//Localtypes
type CategoryType = {
  id: number;
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
      const newShowFixed = window.scrollY > 200;
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
      <List fixed={showFixed ? showFixed : undefined}>
        {loading ? (
          <>
            <ListItem>
              <SkeletonCategory />
            </ListItem>
            <ListItem>
              <SkeletonCategory />
            </ListItem>
            <ListItem>
              <SkeletonCategory />
            </ListItem>
            <ListItem>
              <SkeletonCategory />
            </ListItem>
            <ListItem>
              <SkeletonCategory />
            </ListItem>
            <ListItem>
              <SkeletonCategory />
            </ListItem>
            <ListItem>
              <SkeletonCategory />
            </ListItem>
          </>
        ) : (
          data.map((category: CategoryType) => (
            <ListItem key={category.id}>
              <Category {...category} />
            </ListItem>
          ))
        )}
      </List>
    </>
  );
};

export const ListOfCategories = memo(ListOfCategoriesComponent);
