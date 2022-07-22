import moment from 'moment';

export const formatRupiah = harga =>
  `Rp. ${parseFloat(harga).toLocaleString('id-ID')}`;

export const dateConvert = date => moment(date).format('DD MMM, hh:mm');
