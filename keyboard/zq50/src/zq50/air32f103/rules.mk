# MCU name
MCU = AIR32F103
MCU_LDSCRIPT = AIR32F103xBuf2
FIRMWARE_FORMAT = uf2

# Bootloader selection
BOOTLOADER = custom

OPT_DEFS += -DCORTEX_ENABLE_WFI_IDLE=TRUE
SRC += uf2_boot.c

