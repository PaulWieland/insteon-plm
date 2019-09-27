/* Libraries */
import InsteonDevice from './InsteonDevice';
import PLM from '../main';

/* Types */
import {Byte} from 'insteon-packet-parser';

/* Class */
export default class SwitchLincRelay extends InsteonDevice{
	constructor(deviceID: Byte[], modem: PLM){
		super(deviceID, modem);
	}
}