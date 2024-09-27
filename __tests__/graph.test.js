import { createGraph } from "../Graph";

describe('createGraph', () => {
    test('debe devolver una lista de adyacencia vacía para un grafo vacío (sin aristas)', () => {
        const V = 3;
        const E = [];
        const expected = [[], [], [], []]; // 4 listas vacías, ya que V=3
        expect(createGraph(V, E)).toEqual(expected);
    });

    test('debe devolver la lista de adyacencia correcta para un grafo con aristas', () => {
        const V = 5;
        const E = [
            [1, 2, 3],
            [1, 4, 2],
            [3, 5, 1],
            [3, 4, 3]
        ];
        const expected = [
            [],                  // vértice 0 (no utilizado)
            [[2, 3], [4, 2]],    // vértice 1 conectado a 2 y 4
            [[1, 3]],            // vértice 2 conectado a 1
            [[5, 1], [4, 3]],    // vértice 3 conectado a 5 y 4
            [[1, 2], [3, 3]],    // vértice 4 conectado a 1 y 3
            [[3, 1]]             // vértice 5 conectado a 3
        ];
        expect(createGraph(V, E)).toEqual(expected);
    });

    test('debe manejar correctamente un grafo con un solo vértice y sin aristas', () => {
        const V = 1;
        const E = [];
        const expected = [[], []]; // 2 listas vacías (para vértices 0 y 1)
        expect(createGraph(V, E)).toEqual(expected);
    });
});