import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

const GET_TRACK = gql`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      author {
        id
        name
        photo
      }
      title
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

export const Track = ({ trackId }) => {
  const { data, loading, error } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  console.log(data?.track);
  return (
    <Layout>
      <QueryResult data={data} error={error} loading={loading}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
