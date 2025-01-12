import { IFuncOrigin, IFuncOperatorOrigin } from '@/interface/IFunc';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func041 implements IFuncOrigin {
	id = 41;
	name = '悬赏_一键追踪';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[center, 543, 75, 0x553f2e],
				[center, 754, 79, 0x4a3625],
				[center, 757, 92, 0x5b422d],
				[right, 1180, 132, 0xe8d4d1],
				[right, 1116, 602, 0x3c2918],
				[right, 1157, 595, 0xa0834f],
				[right, 1122, 586, 0x2d1e12],
				[right, 1150, 598, 0xddd08c]
			]
		],
		oper: [
			[left, 1280, 720, 1120, 587, 1180, 645, 1000]
		]
	},
	// 旧
	{
		desc: [1280, 720,
			[
				[center, 596, 77, 0xd7cfbd],
				[center, 622, 78, 0xa99d8c],
				[center, 655, 82, 0x4b3626],
				[center, 684, 77, 0x4d3929],
				[center, 722, 77, 0xe5c35d],
				[right, 1098, 595, 0xf6de9c],
				[right, 1173, 585, 0xe3d393],
				[right, 1147, 580, 0x8b6936],
				[right, 1150, 610, 0x8e6c41]
			]
		],
		oper: [
			[left, 1280, 720, 1120, 587, 1180, 645, 1000]
		]
	}]
}