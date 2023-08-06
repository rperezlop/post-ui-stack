export const errorMessages = {
  RESOURCE_NOT_FOUND: 'Recurso no disponible',
  INTERNAL_ERROR: 'Hubo un error. Inténtalo de nuevo'
};

export const errorMessageByStatusCode = {
  400: errorMessages.RESOURCE_NOT_FOUND,
  404: errorMessages.RESOURCE_NOT_FOUND,
  500: errorMessages.INTERNAL_ERROR,
};

