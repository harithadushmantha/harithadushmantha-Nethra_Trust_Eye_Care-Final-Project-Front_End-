
export const SetCurrentPage = (currentPage) => {
    console.log("params",currentPage)
    return {
        type:"TEST",
        currentPage : currentPage
    };
};
export const SetNavigationLink = (link) => {
    return {
        type:"LINK",
        l:link
    }
}