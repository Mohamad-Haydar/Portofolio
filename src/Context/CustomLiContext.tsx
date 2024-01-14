import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type listContent = {
    title: string;
    selected: boolean;
}

type CustomLi = {
    list: listContent[],
    addLi:(title:string, selected: boolean) => void,
    removeLi: (title:string) => string
};

export const LiContext = createContext<CustomLi>({
    list: [{title: "Home.html", selected: true}], 
    addLi: (_title:string, _selected: boolean) => {},
    removeLi: function (_title: string): string {
        return '/'
    }
});

export const useList = () => useContext(LiContext);

export function CustomLiProvider({ children }:  {children:ReactNode}) {

  useEffect(() => {
    const pathname = window.location.pathname;
    const currentPath = pathname === "/" ? "Home.html" : pathname.substring(1)
    setList([{title: currentPath, selected: true}])
  }, [])

    const [list, setList] = useState<listContent[]>([{title: "Home.html", selected: true}]);

  const addLi = (title:string) => {
    const titleExists = list.some(item => item.title === title);
    if (titleExists) {
        const updatedList = list.map(item =>
          item.title === title ? { ...item, selected: true } :  {...item, selected: false }
        );
        setList(updatedList);
      } else {
        // If the title doesn't exist, set all selected properties to false and add a new item
        const updatedList = list.map(item => ({ ...item, selected: false }));
        setList([...updatedList, { title, selected: true }]);
      }
  };

  const removeLi = (title: string): string => {
    const newlist = list.filter(item => item.title != title)
    const titleExists = newlist.find(item => item.selected == true);
    let navi = "/"
    if(titleExists != null){
        navi = titleExists.title
        setList([...newlist]);
    }else{
        const updatedList = newlist.map((item, index) =>{
            if (index === 0){
                navi = item.title
            }
            return index === 0 ? { ...item, selected: true } :  {...item, selected: false }}
        );
        setList([...updatedList]);
    }
   
    return navi
  }

  const LiValues: CustomLi = {
        list,
        addLi,
        removeLi
  } 

  return (
    <LiContext.Provider value={ LiValues }>
        {children}
    </LiContext.Provider>
  );
}