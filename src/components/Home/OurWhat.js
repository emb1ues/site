function CardTemplate(props) {
    return (
      <div className="card">
        <br />
        <div className="text-center">
          <h3 className="card-title">{props.title}</h3>
        </div>
        <div className="p-3">
          <p className="card-text">
             {props.text}
          </p>
        </div>
      </div>
    );
  }

  function OurWhat() {
  return (
    <div className="home-vision-section">
      <div className="vision-content">

        <div className="vision-header-container">
          <h2 className="vision-h2">Our What</h2>
        </div>

        <div className="card-cover">
          <div className="card-templates-1">
          <CardTemplate title="Personalisation" text="The assistant starts by getting to know you intimately : understanding your preferences, priorities, and communication style, ensuring a uniquely personalized experience." />

          <CardTemplate title="Comprehensive Task Management" text="Seamlessly schedule meetings, read and categorize emails, book cabs, and order food, relieving you of mundane responsibilities." />

          <CardTemplate title="Organized Productivity" text="Efficiently create todos, alarms, and reminders, ensuring you stay on top of your tasks and appointments." />
          </div>
          <br></br>
          <div className="card-templates-2">
          
          <CardTemplate title="Communication on Your Behalf" text="The assistant can also talk to others on your behalf, much like a real assistant. Moreover, it can also talk to other assistants, fostering effortless collaboration in a connected world." />

          <CardTemplate title="Device Ubiquity" text="The assistant also talks to others on your behalf, much like a real assistant. Moreover, it can also talk to other assistants, fostering effortless collaboration in a connected world." />

          <CardTemplate title="Developer Empowerment" text="Explore a visionary platform where developers can contribute tools, expanding the assistant's capabilities and tailoring it to individual needs." />
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default OurWhat;
