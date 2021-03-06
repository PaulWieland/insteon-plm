/* Modem */
import PowerLincModem from './PowerLincModem';

/* Devices */
import InsteonDevice, { DeviceLinkRecord } from './devices/InsteonDevice';

/* Dimable Devices. Device cat 0x01 */
import DimmableLightingDevice from './devices/DimmableLightingDevice/DimmableLightingDevice';
import KeypadDimmer from './devices/DimmableLightingDevice/KeypadDimmer';

/* Switched On/Off Devices. Device cat 0x02 */
import SwitchedLightingDevice from './devices/SwitchedLightingDevice/SwitchedLightingDevice';
import OutletLinc from './devices/SwitchedLightingDevice/OutletLinc';

/* Sensors and Actuators. Device cat 0x07 */
import SensorActuatorDevice from './devices/SensorActuatorDevice/SensorActuatorDevice';
import IOLinc from './devices/SensorActuatorDevice/IOLinc';

/* Security / battery operated sensors. Device cat 0x10 */
import SecurityDevice from './devices/SecurityDevice/SecurityDevice';
import MotionSensor from './devices/SecurityDevice/MotionSensor';
import OpenCloseSensor from './devices/SecurityDevice/OpenCloseSensor';
import LeakSensor from './devices/SecurityDevice/LeakSensor';

/* PLM Types */
import { Packet, PacketID, Byte, AllLinkRecordOperation, AllLinkRecordType, MessageSubtype } from 'insteon-packet-parser';

/* Utilities */
import * as Utilities from './utils';

/* Exporting Modem as default */
export default PowerLincModem;

/* Exporting extras */
export {
	// Generic Device
	InsteonDevice,

	// Dimmable
	DimmableLightingDevice,
	KeypadDimmer,

	// Switched
	SwitchedLightingDevice,
	OutletLinc,

	// Sensors & Actuators
	SensorActuatorDevice,
	IOLinc,

	// Security / battery operated sensors
	SecurityDevice,
	MotionSensor,
	OpenCloseSensor,
	LeakSensor,

	// Utilities
	Utilities,

	// PLM Types
	Packet,
	PacketID,
	Byte,
	AllLinkRecordOperation,
	AllLinkRecordType,
	MessageSubtype,
	
	DeviceLinkRecord
}


