const logger = store => next=> action=>{
    console.log("",action);
    console.log("",store.getState());


    const result = next(action);
    console.log("After:", store.getState());
    return result;
};
export default logger;