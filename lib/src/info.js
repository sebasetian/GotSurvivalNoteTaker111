var maps = require('./maps.json');
var map = 0;
var wave = 10;

export function GetMapName(i) {
	return maps[i].name;
}

export function InitMap(i) {
	map = i;
	wave = 0;
}

export function GetWaveLength() {
	return maps[map].waves.length;
}

export function GetWave() {
	return wave;
}

export function NextWave() {
	wave++;
}

export function PrevWave() {
	wave--;
}

export function GetWaveSites(i) {
	return maps[map].waves[wave][i];
}

export function GetSitesName(site) {
	return maps[map].sites[site];
}

export function GetSitesHelper(site) {
	return maps[map].siteshelper[site];
}

export function GetNextWaveNotes() {
	if(wave + 1 < GetWaveLength())
		return maps[map].nextwavenotes[wave + 1];
	else
		return "";
}