const retrivedSuccess = (res, status, dataName, data) => {
    const response = res.json({
        status: status,
        message: `${dataName} retrieved successfully`,
        data: data,
    }).status(status);
    return response;
};
const createSuccess = (res, status, dataName, data) => {
    const response = res.json({
        status: status,
        message: `${dataName} created successfully`,
        data: data,
    }).status(status);
    return response;
};

module.exports = { retrivedSuccess, createSuccess }