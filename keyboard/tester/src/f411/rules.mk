MCU = STM32F411

#BOOTLOADER = stm32-dfu
BOOTLOADER = tinyuf2

KEYBOARD_SHARED_EP = yes
WS2812_DRIVER = pwm
OPT_DEFS += -DCORTEX_ENABLE_WFI_IDLE=TRUE
