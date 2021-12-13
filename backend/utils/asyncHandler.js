export function asyncHandler(routeHandler) {
  return async (req, res, next) => {
    try {
      await routeHandler(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
