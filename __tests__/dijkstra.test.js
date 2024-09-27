import { createGraph, djikstra } from "../Dijkstra";

describe("Graph Functions", () => {
  describe("djikstra", () => {
    test("should return correct distances from source node 0", () => {
      const V = 9;
      const E = [
        [0, 1, 4],
        [0, 7, 8],
        [1, 7, 11],
        [1, 2, 8],
        [7, 8, 7],
        [6, 7, 1],
        [2, 8, 2],
        [6, 8, 6],
        [5, 6, 2],
        [2, 5, 4],
        [2, 3, 7],
        [3, 5, 14],
        [3, 4, 9],
        [4, 5, 10],
      ];

      const graph = createGraph(V, E);
      const result = djikstra(graph, V, 0);

      const expectedDistances = [
        [0, -1], // Node 0 is the source, so the distance is 0
        [4, 0], // Node 1 has distance 4 from node 0
        [12, 1], // Node 2 has distance 12 from node 0
        [19, 2], // Node 3 has distance 19 from node 0
        [21, 5], // Node 4 has distance 21 from node 0
        [11, 6], // Node 5 has distance 11 from node 0
        [9, 7], // Node 6 has distance 9 from node 0
        [8, 0], // Node 7 has distance 8 from node 0
        [14, 2], // Node 8 has distance 14 from node 0
      ];

      expect(result).toEqual(expectedDistances);
    });

    test("should return infinity for unreachable nodes", () => {
      const V = 5;
      const E = [
        [0, 1, 4],
        [1, 2, 8],
        [2, 3, 7],
      ];
      const graph = createGraph(V, E);
      const result = djikstra(graph, V, 0);

      const expectedDistances = [
        [0, -1], // Node 0
        [4, 0], // Node 1
        [12, 1], // Node 2
        [19, 2], // Node 3
        [10000, -1], // Node 4 is unreachable
      ];

      expect(result).toEqual(expectedDistances);
    });
  });
});
