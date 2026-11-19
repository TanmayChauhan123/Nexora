export const asyncHandler = (fn)=>(req, res , next)=>
    Promise.resolve(fn(requestAnimationFrame,res,next)).catch(next);