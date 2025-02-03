import React, { useEffect } from "react";
import { useSelector } from "react-redux";

// hooks
import { fetchQuakes } from "../redux/slices/quakesSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  selectQuakes,
  selectLoading,
  selectError,
} from "../redux/slices/quakesSlice";

// components
import QuakeListRow from "./QuakeListRow";
import MessageBar from "./MessageBar";
import Loading from "./Loading";

const QuakesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const quakes = useSelector(selectQuakes);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchQuakes());
  }, []);

  return (
    <>
      {quakes && (
        <MessageBar
          type="success"
          txt={`Βρέθηκαν ${quakes.length} πρόσφατοι σεισμοί`}
        />
      )}

      {/* error message */}
      {error && <MessageBar type="error" txt={error} />}

      {/* loading message */}
      {loading && (
        <MessageBar
          type="info"
          txt="Φορτώνει η λίστα με τους πρόσφατους σεισμούς.."
        />
      )}

      {loading && <Loading />}

      <div className="quakeslist">
        {quakes.map((quake) => {
          return <QuakeListRow key={quake.title} quake={quake} />;
        })}
      </div>
    </>
  );
};

export default QuakesList;
