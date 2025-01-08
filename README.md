# Importing Course Content in Canvas

This goal of this project is to produce a SCORM object that teaches instructors
how to properly import content into a Canvas course. The following topics will
be covered.

## Topics

### Course Overview

Importing content from a previous course will save you a significant amount of
time and effort. This process should be performed carefully to avoid troublesome
issues.

### Where to Begin

There are two main places to begin the course import process. This lesson will
show you those places.

### How to Set Up an Import

In this lesson, you will see how to use the import page and its settings to
arrange for a proper course import.

### What to Do After the Import is Complete

Once the import is complete, there is still work to be done. In this lesson, you
will learn the steps to complete after you have completed the import.

## WHAT'S MISSING?

In order for this to work, you will need to unzip the Rustici driver into the
public directory which is not included in this repository in accordance with
their license. You must register for a
[Scorm Cloud](https://app.cloud.scorm.com/sc/guest/SignInForm) account, agree to
their licensing, and then download their driver.

After downloading the driver, you should create a "public" folder at the root of
the project. Unzip the driver into this public directory. Then, you will need to
edit the public/imsmanifest.xml and the scormdriver/indexAPI.html file.
