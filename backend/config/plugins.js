module.exports = ({ env }) => ({
  upload: {
    provider: "local",
    providerOptions: {
      // Set the public path where uploads should be accessible
      publicPath: "/uploads",
    },
  },
});
