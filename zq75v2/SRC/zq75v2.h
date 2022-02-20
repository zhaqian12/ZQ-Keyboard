/* Copyright 2021 ZhaQian
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#pragma once

#include "quantum.h"

#define LAYOUT( \
	K000, K001, K002, K003, K004, K005, K006, K007, K008, K009, K010, K011, K012, K013, K014, \
	K100, K101, K102, K103, K104, K105, K106, K107, K108, K109, K110, K111, K112, K113, K114, \
	K200, K201, K202, K203, K204, K205, K206, K207, K208, K209, K210, K211, K212, K213, K214, \
	K300, K301, K302, K303, K304, K305, K306, K307, K308, K309, K310, K311, K312, K313, K314, \
	K400, K401, K402, K403, K404, K405, K406, K407, K408, K409, K410, K411, K412,             \
	K500, K501, K502, K503,       K505,       K507,       K509, K510, K511, K512,       K514  \
) { \
	{ K000,  K001,  K002,  K003,  K004,  K005,  K006,  K007,  K008,  K009,  K010,  K011,  K012,  K013,  K014 }, \
	{ K100,  K101,  K102,  K103,  K104,  K105,  K106,  K107,  K108,  K109,  K110,  K111,  K112,  K113,  K114 }, \
	{ K200,  K201,  K202,  K203,  K204,  K205,  K206,  K207,  K208,  K209,  K210,  K211,  K212,  K213,  K214 }, \
	{ K300,  K301,  K302,  K303,  K304,  K305,  K306,  K307,  K308,  K309,  K310,  K311,  K312,  K313,  K314 }, \
	{ K400,  K401,  K402,  K403,  K404,  K405,  K406,  K407,  K408,  K409,  K410,  K411,  K412,  KC_NO, KC_NO }, \
	{ K500,  K501,  K502,  K503,  KC_NO, K505,  KC_NO, K507,  KC_NO, K509,  K510,  K511,  K512,  KC_NO, K514 }  \
}


//custom keycodes
enum custom_keycodes {
#ifdef ALT_TAB_MARCO_ENABLE
#ifdef VIA_ENABLE
    ATR = USER00,			//alt_shift_tab
#else
    ATR = SAFE_RANGE,		//alt_shift_tab
#endif
    ATF,					//alt_tab
#endif
#ifdef RGB_MATRIX_CONTROL_ENABLE
	UGLRGBTog,				//rgb toggle for underglow rgb light
	KBLRGBTog,				//rgb toggle for key rgb backlight
#endif
#ifdef UNDERGLOW_RGB_MATRIX_ENABLE
	UGLFIXEDRGBMODF,		//underglow light fixed and only changes rgb effects of backlight
#endif
#ifdef OLED_ENABLE
	CATTOG,					//cat animation toggle
#endif
};

#ifdef OLED_ENABLE
extern bool is_cat_anime_active;
extern bool anime_cleared;
void CatToggle(void);
#endif



