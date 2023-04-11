import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

const INCREMENT_TRACK_VIEWS = gql`
  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        numberOfViews
      }
    }
  }
`;

/** GET_TRACK gql query to retrieve a specific track by its ID */
const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

/**
 * Track Page fetches a track's data from the gql query GET_TRACK
 * and provides it to the TrackDetail component to display
 */
const Track = ({ trackId }) => {
  const { loading, error, data, refetch } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  const [incrementTrackViews] = useMutation(INCREMENT_TRACK_VIEWS, {
    variables: { incrementTrackViewsId: trackId },
    onCompleted: () => {
      refetch();
    },
  });

  React.useLayoutEffect(() => {
    incrementTrackViews();
  }, []);

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
