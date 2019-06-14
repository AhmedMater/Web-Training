import {RoleVTO} from "./role-vto.model";


export class UserVTO {
  fullNameAR: string;
  fullNameEN: string;
  isActive: boolean;
  email: string;
  expiryDate: string;
  role: RoleVTO;
}