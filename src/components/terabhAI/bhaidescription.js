import React, {  } from 'react';
import './bhaiPage.css'

function AppDescription() { 
    return (
      <div className='app-description-container'>
        {/* Header  */}
        <div className='description header'>
          <h1 className='headertext'> Know How Bhai Works!</h1>
        </div>

        {/* Personalisation Part */}
        <div className='help-items'>
          <div className='help-item-header'>
            <h2 className='help-header-text'>
              Personalization
            </h2>
          </div>
          <div className='help-item-description'>
            <p className='help-description-text'>
              To enhance your experience on our app, the assistant tries to learn about you. Whenever the assistant figures anything about you, before it starts using that info to personalize its responses, it asks for your approval. You can see all the information pending approval by clicking on the personalization button. From here, you can accept or reject suggested information to be used for personalization.
            </p>
          </div>
        </div>

        {/* Filters Part */}
        <div className='help-items-multiline'>
          <div className='multiline-lines'>
            <div className='help-item-header'>
              <h2 className='help-header-text'>
                Filters
              </h2>
            </div>
            
            <div className='help-item-description'>
              <p className='help-description-text'>
                Filters represent the security and the access level of the message. There are five filters a message can be placed in - Public, Always Active, Active, Frozen and Delete. As we go from left to right, each filter have reduced access and increased security than the previous. To switch filters in a message, simply swipe them left or right. To change the filters of multiple messages, tap and hold a message to enter select mode and then select any filter in the menu on the bottom of the screen to set the filter to all the selected message. 
              </p>
            </div>
          </div>
          <div className='multiline-lines'>
            <div className='help-item-subheader'>
              <h2 className='help-subheader-text'>
                Public
              </h2>
            </div>
            <div className='help-item-subdescription'>
              <p className='help-subdescription-text'>
                Public Messages are messages that have the highest level of access. Information processed from public messages are put in your public website. You can keep messages that you want everyone to know in the public filter. Your public bot, which will be introduced soon, will also have access to these messages.
              </p>
            </div>
          </div>
          <div className='multiline-lines'>
            <div className='help-item-subheader'>
              <h2 className='help-subheader-text'>
                Always
              </h2>
            </div>
            <div className='help-item-subdescription'>
              <p className='help-subdescription-text'>
                Over time, your old messages and conversations are forgotten by an assistant, much like a human. However, you would want your assistant to remember some particular things forever/for the current conversation. This is achieved by the Always filter. Messages in the Always filter are always in the mind and context of the assistant.
              </p>
            </div>
          </div>
          <div className='multiline-lines'>
            <div className='help-item-subheader'>
              <h2 className='help-subheader-text'>
                Active
              </h2>
            </div>
            <div className='help-item-subdescription'>
              <p className='help-subdescription-text'>
                This is the default mode for a message. These messages form the "history" of the current conversation. The key difference between Active and Always Active messages is that an Active messages decays into frozen whereas Always Active messages stay always active.
              </p>
            </div>
          </div>
          <div className='multiline-lines'>
            <div className='help-item-subheader'>
              <h2 className='help-subheader-text'>
                Frozen
              </h2>
            </div>
            <div className='help-item-subdescription'>
              <p className='help-subdescription-text'>
                These are messages that you want the assistant to forget. This is like casting obliviate on the assistant. But they can be later turned active should you wish to use them for some conversation.
              </p>
            </div>
          </div>
          <div className='multiline-lines'>
            <div className='help-item-subheader'>
              <h2 className='help-subheader-text'>
                Delete
              </h2>
            </div>
            <div className='help-item-subdescription'>
              <p className='help-subdescription-text'>
                Works exactly what the name suggests :) If you are sure you don't need a message ever again, use this to delete an entire message from database.
              </p>
            </div>
          </div>
          </div>

          {/* Screens  */}
          <div className='help-items-multiline'>
          <div className='multiline-lines'>
            <div className='help-item-header'>
              <h2 className='help-header-text'>
                Screen
              </h2>
            </div>
            
            <div className='help-item-description'>
              <p className='help-description-text'>
                Besides the 5 filters, we also have 3 screens - Public, Home and Incognito ;) Again, going left to right, these have increased security and reduced access. Filters are not available in Public and Incognito screens.
              </p>
            </div>
          </div>
          <div className='multiline-lines'>
            <div className='help-item-subheader'>
              <h2 className='help-subheader-text'>
                Home
              </h2>
            </div>
            <div className='help-item-subdescription'>
              <p className='help-subdescription-text'>
                This is the default screen for chatting with your assistant. You can change your message filters from this screen, as required.
              </p>
            </div>
          </div>
          <div className='multiline-lines'>
            <div className='help-item-subheader'>
              <h2 className='help-subheader-text'>
                Public
              </h2>
            </div>
            <div className='help-item-subdescription'>
              <p className='help-subdescription-text'>
                Swiping to the left on the navbar or by going into more options, you can enter the public screen. In the public screen, all messages are in the public filter by default and the filter cannot be changed. Hence, the content of the the conversations in the public screen might be used to update your public bot and website.
              </p>
            </div>
          </div>
          <div className='multiline-lines'>
            <div className='help-item-subheader'>
              <h2 className='help-subheader-text'>
                Incognito
              </h2>
            </div>
            <div className='help-item-subdescription'>
              <p className='help-subdescription-text'>
                This screen is for your super private discussions. Leaving this screen deletes the conversation. Also, no personal info is collected from the messages in your incognito screen. 
              </p>
            </div>
          </div>
        </div>

        {/* Website Part */}
        <div className='help-items'>
          <div className='help-item-header'>
            <h2 className='help-header-text'>
              Personal Website
            </h2>
          </div>
          <div className='help-item-description'>
            <p className='help-description-text'>
              A key feature of TerabhAI is the free personal website that you can develop just through your Public messages (both through public filter and through public screen). To visit your website, go to the public screen and click on the web logo in the navigation bar. And voila! There you have your website. 
            </p>
          </div>
        </div>

        {/* Plgins Part */}
        <div className='help-items-lastitem'>
          <div className='help-item-header'>
            <h2 className='help-header-text'>
              Plugins
            </h2>
          </div>
          <div className='help-item-description'>
            <p className='help-description-text'>
              One of the key powers of our assistant is its ability to utilize various plugins to automate your mundance tasks and in general, enhance your experience with our app and with life. For alpha, we have a todo plugin through which your assistant can keep track of your todo list. We welcome developers into the plugin ecosystem through which they can write plugins for TerabhAI for the entire world. 
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default AppDescription;