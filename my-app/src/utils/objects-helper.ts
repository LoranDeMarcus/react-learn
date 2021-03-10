export const toggleObjectValueInArray = (items: any, objPropName: string, itemId: number, newObjProps: any) => {
    console.log(newObjProps);
    return items.map((item: any) => {
        if (item[objPropName] === itemId) {
            return { ...item, ...newObjProps };
        }
        return item;
    });
};
