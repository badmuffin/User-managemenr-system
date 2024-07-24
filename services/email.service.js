import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: "email",
  actions: {
    async  sendEmail(ctx) {
      const { recipient, subject, content } = ctx.params;
      // simulated email logic
      console.log(`Sending Email to ${recipient} with subject ${subject}`);
      console.log(`Content: ${content}`);
      return `Email sent to ${recipient}`;
    },
  },
});

export default broker;