# Project Overview

## Project Name

Bucha Bucha

## Project Description

Bucha Bucha is a React based app that uses an API from Airtable. Users will be able to view and post recipes (based on category) for flavoring a home brewed kombucha during the second fermentaion cycle. Users will also be able to view kombucha facts on the Bucha Basic (FAQ) page.

## Wireframes

https://www.figma.com/file/tSHSEwpdza0rPbP0j2Z5eM/BUCHA-BUCHA

## Component Hierarchy

![image](https://user-images.githubusercontent.com/59977555/117818373-87b9a200-b236-11eb-88bd-80511c03e461.png)

## API and Data Sample

```json
{
    "records": [
        {
            "id": "recaaS2A1gRp1flBP",
            "fields": {
                "type": "herbSpice",
                "name": "Hibiscus Breeze",
                "batchSize": "1 gallon",
                "ingredients": "3 Tbsp dry hibiscus\n2 inches ginger, grated\n1 lime, grated",
                "days": "3 days"
            },
            "createdTime": "2021-05-07T12:17:07.000Z"
        },
        {
            "id": "recQanhVOGM7Ym3C4",
            "fields": {
                "type": "fruit",
                "name": "Peachy Keen",
                "batchSize": "1 quart",
                "ingredients": "1 peach, peeled and chopped\n1/8 tsp cinnamon\npinch of ginger",
                "days": "1-2 days"
            },
            "createdTime": "2021-05-07T12:17:07.000Z"
        }
    ]
}

```

### MVP/PostMVP

#### MVP 

-Create components. <br>
-Get request.<br>
-Post request.<br>
-Create new flavor recipes and update Airtable through a form.<br>
-Style with CSS


#### PostMVP  

-Incorporate a search bar to find recipes by ingredient.<br>
-Incoporate a Like/Dislike button & counter for each recipe.<br>
-Bucha Basics: Create a modal box for each kombucha fact.<br>
-Put Request.<br>
-Add question form to Bucha Basic page.<br>
-Alter static img on Bucha Basics page into a cutout collage img.


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 6| Prompt / Wireframes / Timeframes | Complete
|May 7| Project Approval | Complete
|May 8-9 | Airtable Setup & Draft Text Content | Incomplete
|May 10 | Airtable Setup & Draft Text Content Cont. | Incomplete
|May 10  | Creating Components | Incomplete
|May 11 | Creating Components Cont. | Incomplete
|May 11 | Get & Post Requests | Incomplete
|May 12|  CSS  | Incomplete
|May 13| CSS MVP Cont. | Incomplete
|May 14| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| AirTable Setup | H | 2hrs| 1 hrs | 1hrs |
| Draft Text Content | M-H  | 2hrs| 1.5hrs | 1.5hrs |
| Creating Components | H | 9hrs| 9.5hrs | 0hrs |
| Rendering Data from API | H | 6hrs| 8hrs | 8hrs |
| Data Creation & Update | H | 6hrs| 4.5hrs | 0hrs |
| CSS  | H | 8hrs| 9.5hrs | 9.5hrs |
| PMVP  | H | TBD hrs| 22hrs | 22hrs |

| Total | H | 33hrs| 34hrs | 34hrs |<br>
| Total w/ PMVP | H | 33+hrs| 56hrs | 56hrs |

## SWOT Analysis

### Strengths:  Well organized, and good at working in a timely matter.

### Weaknesses:  Being obsessed (spending too much time) with troubleshooting a problem by myself. (Had an instance where I lost track of time trying to troubleshoot a problem during my last project.) Need to set a timer for troubleshooting; if I am unable to correct it withing the designated time, I wll seek assistance.

### Opportunities:  Incorporating some of my PMVPs; if not all of them.

### Threats:  Going down that 'troubleshooting obsessed' rabbit hole.  Covid vaccination recovery.

### Notes:  
-Make certain to incorporate booststrap when building out the components; incorportaing post component build-out (and CSS) will muck up the style layout.<br>
-Importing bootstrap will cause some pre-exisisting code to become inoperative: examlpe - dropdown menu.  Need to research why this happens and how to rectify this issue.
