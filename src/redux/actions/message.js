import { DISPLAY_MESSAGE, HIDE_MESSAGE } from '../../constant/actionTypes/toastMessage';
export const showMessage = {
  messageMetadata: {
    type:'',
    message:'',
    autoHideDuration: 5000
  },
  success() {
    this.messageMetadata.type = 'success';
    this.messageMetadata.message = 'Registro creado con exito';
    return this;
  },
  warning() {
    this.messageMetadata.type = 'warning';
    return this;
  },
  error() {
    this.messageMetadata.type = 'error';
    this.messageMetadata.message = 'Error al crear registro';
    return this;
  },
  info() {
    this.messageMetadata.type = 'info';
    return this;
  },
  message(value) {
    this.messageMetadata.message = value ? value : this.messageMetadata.message;
    return this;
  },
  duration(value) {
    this.messageMetadata.autoHideDuration = value || 5000;
    return this;
  },

  build() {
    return {
      type: DISPLAY_MESSAGE,
      message: this.messageMetadata
    };
  },

}

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
  message: {}
});

