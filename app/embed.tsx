import dynamic from "next/dynamic";

const TwitterTimelineEmbed = dynamic(
  () => import("react-twitter-embed").then((mod) => mod.TwitterTimelineEmbed),
  {
    loading: () => <p>Loading Twitter Timeline...</p>,
  }
);

export default function Embed() {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="jibolaojo"
      noBorders
      // options={{ height: 445.186, width: 605.004, tweetLimit: 8 }}
      noFooter
      transparent
      autoHeight
      theme="dark"
    />
  );
}
