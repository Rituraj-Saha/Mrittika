import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

//  Default guideline sizes are based on standard ~5" screen mobile device
const GUIDELINE_BASE_WIDTH = 360;
export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;

export type DeviceType = 'Handset' | 'Tablet';

export const scale = (value: number, factor: number = 0.4): number =>
  value + ((fullWidth / GUIDELINE_BASE_WIDTH) * value - value) * factor;

export const selectDeviceType = <T>(
  spec: {[type in DeviceType]?: T},
  defaultValue: T,
): T => {
  const deviceType = DeviceInfo.getDeviceType();
  const definedValue = spec[deviceType];
  return definedValue !== undefined ? definedValue : defaultValue;
};

export const percentage = <T extends boolean>(
  value: number,
  absoluteValue: boolean = false,
): T extends true ? number : string => {
  const w = fullWidth;
  return absoluteValue ? (((value * w) / 100) as any) : ((value + '%') as any);
};

export const isHandset = DeviceInfo.getDeviceType() === 'Handset';
