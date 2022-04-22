# ZQ-Keyboard
ZQ Keyboard Repository

## Keyboard List
| NAME          | VENDOR_ID | PRODUCT_ID | MCU      	       | FEATURES                                     |
|:-------------:| :-------: | :--------: | :---------------: | :------------------------------------------: |
| zq75v2        | 0x00AA    | 0xAA01     | Atmel at90usb1286 | RGB, UGRGB, ENCODER, OLED                    |
| comb67        | 0x00AA    | 0xAA02     | Atmel atmega32u4  | RGB, UGRGB        |
| zq80          | 0x00AA    | 0xAA05     | Atmel atmega32u4  | RGB, UGRGB, LOGORGB                          |
| zq48          | 0x00AA    | 0xAA07     | Atmel atmega32u4  | RGB, UGRGB                                   |
| zq46          | 0x00AA    | 0xAA11     | ST stm32f401  | RGB, UGRGB, ENCODER |
| zq50          | 0x00AA    | 0xAA16     | ZKICME cks32f103  | RGB, UGRGB, ENCODER |
| Mpad12        | 0x00AA    | 0xAAAA     | Atmel atmega32u4  | RGB, UGRGB, JOYSTICK, ENCODER, OLED          |

### Keyboard Folder Structure

    -keyboard
      - keyboard name
        - src (source files)
        - fw  (keyboard firmware)
        - pcb (Keyboard pcb)
        - pic (keyboard pictures)
        - other...

## Keyboard Instructions
- firmware flash instruction
- via/vial instruction
- custom keycode instruction
- [openrgb instruction](./software/openrgb/openrgb.md)
