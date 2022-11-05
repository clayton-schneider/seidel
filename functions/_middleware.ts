import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Clayton Schneider", email: "clayton@simply-sprout.com" }],
    },
  ],
  from: {
    name: "Website Form Completion",
    email: "no-reply@simply-sprout.com",
  },
  respondWith: () => {
    return new Response(
      `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    );
  },
});
