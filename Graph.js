/**
 * @fileoverview 
 * Este archivo contiene funciones para la creación y manipulación de grafos
 * utilizando listas de adyacencia como estructura de datos principal.
 * 
 * @author Santiago
 * @license MIT
 * 
 * @see {@link https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)} Para más información sobre teoría de grafos
 * @see {@link https://en.wikipedia.org/wiki/Adjacency_list} Para más información sobre listas de adyacencia
 */

/**
 * @interface Edge
 * Representa una arista en el grafo
 * @property {number} source - Vértice origen
 * @property {number} target - Vértice destino
 * @property {number} weight - Peso de la arista
 */

/**
 * @const {number}
 * Número de vértices en el grafo (0 a V inclusive)
 */
const V = 5;

/**
 * @const {Array<Array<number>>}
 * Array de aristas donde cada arista es [origen, destino, peso]
 */
const E = [[1,2,3], [1,4,2], [3,5,1], [3,4,3]];

/**
 * Crea un grafo no dirigido utilizando una lista de adyacencia.
 * 
 * @param {number} V - Número de vértices en el grafo (0 a V inclusive)
 * @param {Array<Array<number>>} E - Array de aristas donde cada arista es un array de 3 elementos [origen, destino, peso]
 * @returns {AdjacencyList} Lista de adyacencia donde cada elemento es un array de arrays [vértice_destino, peso]
 * 
 * @example
 * const V = 5;
 * const E = [[1,2,3], [1,4,2], [3,5,1], [3,4,3]];
 * const graph = createGraph(V, E);
 * // Retorna una lista de adyacencia donde graph[i] contiene los vecinos del vértice i
 * // Cada vecino se representa como [vértice_destino, peso_arista]
 */
export function createGraph(V, E) {
    let adjacency_list = [];

    // Inicializa la lista de adyacencia vacía para cada vértice
    for (let i = 0; i <= V; i++) {
        adjacency_list.push([]);
    }

    // Agrega cada arista en ambas direcciones (grafo no dirigido)
    for (let i = 0; i < E.length; i++) {
        adjacency_list[E[i][0]].push([E[i][1], E[i][2]]);
        adjacency_list[E[i][1]].push([E[i][0], E[i][2]]);
    }

    return adjacency_list;
}

let graph = createGraph(V, E);

console.log(graph.length);
console.log(graph);