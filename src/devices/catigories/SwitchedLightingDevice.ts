/* Libraries */
import InsteonDevice from '../InsteonDevice';
import { Packets, Byte } from '../../main';

/* Class */
export default class SwitchedLightingDevice extends InsteonDevice {

	//#region Higher functions

	public switch(state: boolean, level?: Byte, fast: boolean = false){

		state ? fast ? this.LightOnFast()  : this.LightOn()
					: fast ? this.LightOffFast() : this.LightOff();

	}


  //#endregion
  
  //#region Insteon Methods

  //#region Lighting Methods

  public async LightOn(): Promise<Packets.StandardMessageRecieved> {
		return this.sendInsteonCommand(0x11, 0xFF);
	}

	public async LightOnFast(): Promise<Packets.StandardMessageRecieved> {
		return this.sendInsteonCommand(0x12, 0xFF);
	}

	public async LightOff(): Promise<Packets.StandardMessageRecieved> {
		return this.sendInsteonCommand(0x13, 0x00);
	}

	public async LightOffFast(): Promise<Packets.StandardMessageRecieved> {
		return this.sendInsteonCommand(0x14, 0x00);
	}

  //#endregion

  //#region Linking Methods

  public stopRemoteLinking(): Promise<Packets.StandardMessageRecieved>{

		// Setting up command
		const cmd1 = 0x08;
		const cmd2 = 0x00;

		/* Sending command */
		return this.sendInsteonCommand(cmd1, cmd2);
	}

  //#endregion

  //#endregion

}