import dynamic from "next/dynamic";

const TwitterTweetEmbed = dynamic(
  () => import("react-twitter-embed").then((mod) => mod.TwitterTweetEmbed),
  {
    loading: () => <p>Loading Twitter Timeline...</p>,
  }
);

export default function Embed({ tweetId }: { tweetId: string }) {
  return (
    <TwitterTweetEmbed
      placeholder="Loading..."
      tweetId={tweetId}
      options={{ theme: "dark", transparent: true }}
      // sourceType="profile"
      // screenName="Fudder_AI"
      // noBorders
      // options={{ height: 445.186, width: 605.004, tweetLimit: 8 }}
      // noFooter
      // transparent
      // autoHeight
      // theme="dark"
    />
  );
}
