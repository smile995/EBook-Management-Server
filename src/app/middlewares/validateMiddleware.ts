import catchAsyncHandller from "./catchAsyncHandller"

export const validateMiddleware = (schema: any) => {
    return catchAsyncHandller(async (req, res, next) => {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params
        })
        next()
    })
}