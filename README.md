# Jeremy Ellsworth Designs LLC

## Documentation

### Start Localhost

To start your localhost to make some changes with content follow the steps below:

1. Open Github Desktop Application
2. Click `Repository` tab and then click `Open in command prompt`
3. In the Terminal, run this command `yarn dev`
4. Open your browser and go to `localhost:3000` and you are good to make some changes.

### Updating Header Banner

Updating header banner is by editing the `/_mocks_/topContent.js` file and follow the step below how to update each content.

1. Open `/_mocks_/topContent.js`.
2. By updating Image, upload the image in `/public/images/banners/top-banner` folder. Then in line 1 edit the imported file to whatever you named your file.
3. Editing the `title` is by changing the value in `title`.
    - Wrap the text with `<span class="primaryColor">TEXT</span>` if you want the text to become color yellow.
    - Wrap the text with `<span class="underline">TEXT</span>` if you want the text to have that underline image.
4. Editing the `details` is by changing the value in `details`.
5. Editing the `reviews` in Read More button is by changing the following data:
    - Customer Image (`customer->image`): Upload the image in `/public/images/reviews` folder and import it by adding this code at the very first line of the file `import CustomerImage from ../public/images/reviews/jonathan-lord.png` then use the variable name `CustomerImage` in `customer->image` object.
    -  Customer Name (`customer->name`): Change the value
    -  Customer Job (`customer->job`): Change the value
    -  Review Comment (`comment`): Change the value
    -  Review Platform (`platform`): Change the value to these 3 `facebook`, `google`, or `trustpilot` only.
    -  Review DateTime (`datetime`): Change the value
6. Changing the Video in Watch Video button, get the ID of the Youtube video
