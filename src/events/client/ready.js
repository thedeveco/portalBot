const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    const updatePresence = async () => {
      await client.user.setPresence({
        status: "online",
        activities: [
          {
            type: ActivityType.Watching,
            name: `over the DevEco server`,
          },
        ],
      });
    };

    updatePresence();
    setInterval(updatePresence, 300000);
  },
};
