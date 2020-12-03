const responseTypes = {
  SUCCEED: 'SUCCEED',
  FAILED: 'FAILED',
};

export const succeed = (response) => {
  return {
    type: responseTypes.SUCCEED,
    code: response.status,
    data: response.data,
  };
};

export const failed = (error) => {
  try {
    return {
      type: responseTypes.FAILED,
      code: error.response.status,
      error: error.response.data.error,
    };
  }
  catch (error) {
    return {
      type: responseTypes.FAILED,
    }
  }
};

export default responseTypes;