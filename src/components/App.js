import React, { Component } from "react";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div>
        <h2>Hello Youtube</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <ProjectList key={list.id} title={list.title} cards={list.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);