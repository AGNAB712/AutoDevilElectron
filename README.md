> ## ⚠️ WARNING:
> AutoDevil is still in **early beta**. If you run into any bugs or issues, don\'t hesitate to report them in
> the [issues tab](https://github.com/UWST-Robotics/AutoDevil/issues).

# AutoDevilElectron

Fork of AutoDevil's web app to work with electron.

## Features

- ✏️ Design Linear, Spline, and Holonomic paths
- ‼️ Execute custom events at each control point
- ▶️ Preview animated robot path
- 🎨 Customize field layout and robot dimensions
- 🤖 Compatible w/ VEX, FIRST, and any other 3rd-party ecosystems

## Planned features

 - Hooking on to robot repos to save and read autonomi automatically
 - Autonomous selection menu at startup (from saved autonomi in robot repo)
 - Autosteps:
    - Add autosteps as able to be enabled in different autonomi
    - Automatically populate actions from the autosteps loaded to the autonomi

## Planned file structure

- autonomous
    - [autosteps](https://docs.devilbots.org/tutorials/autonomous#autosteps)
        - (multiple autostep files)
    - paths
        - (path jsons)
    - autonomous
        - (autonomous, generated from path jsons)

## How to Use

to be updated

## File Commands

### Path File

| Type           | Syntax                                       | Notes                     |
|----------------|----------------------------------------------|---------------------------|
| File Header    | `PATH <v>`                                   | Version 1                 
| Point          | `POINT <x> <y> <r> <enterDelta> <exitDelta>` | Inches/Degrees            
| Reverse Marker | `REVERSE`                                    | Immediately follows point 
| Event          | `EVENT <id> <params>`                        | Immediately follows point 
| File Footer    | `ENDPATH`                                    |

### Occupancy File

| Type        | Syntax          | Notes                    |
|-------------|-----------------|--------------------------|
| File Header | `OCCUPANCY <v>` | Version 1                
| Row         | `11000...10`    | 1=occupied, 0=unoccupied 
| File Footer | `ENDOCCUPANCY`  |

# Building
Install NodeJS and Yarn, then run  
```yarn install```  
and  
```yarn run dev```