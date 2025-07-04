function imagePath(req, res, next){
    const path=`${req.protocol}://${req.get("host")}/images`;
    req. imagePath=path;
    next()
}
export default imagePath;