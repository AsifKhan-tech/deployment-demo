class APIResponse {
  static ok(res, message, data = null) {
    return res.status(200).json({
      success: true,
      message: message,
      data: data,
    });
  }

  static created(res, message, data = null) {
    return res.status(201).json({
      sucess: true,
      message: message,
      data: data,
    });
  }
}
