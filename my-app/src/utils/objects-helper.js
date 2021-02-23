export const toggleObjectValueInArray = (items, objPropName, itemId, newObjProps) => {
    console.log(newObjProps);
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return { ...item, ...newObjProps };
        }
        return item;
    });
};
