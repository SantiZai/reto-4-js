/**
 * @fileoverview 
 * Implementación del algoritmo de Dijkstra para encontrar el camino más corto en un grafo ponderado.
 * Incluye funciones para crear el grafo y ejecutar el algoritmo de Dijkstra.
 * 
 * @author Santiago
 * @license MIT
 * @see {@link https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm} Para más información sobre el algoritmo de Dijkstra
 */

/**
 * Crea un grafo no dirigido usando una lista de adyacencia
 * 
 * @param {number} V - Número de vértices en el grafo (0 a V-1)
 * @param {Array<Array<number>>} E - Array de aristas donde cada arista es [origen, destino, peso]
 * @returns {AdjacencyList} Lista de adyacencia donde cada elemento es un array de arrays [vértice_destino, peso]
 * 
 * @example
 * const V = 9;
 * const E = [[0,1,4], [0,7,8]];  // [origen, destino, peso]
 * const graph = createGraph(V, E);
 */
export function createGraph(V, E) {
    // Inicializa la lista de adyacencia
    let adj_list = [];
    for(let i = 0; i < V; i++) {
        adj_list.push([]);
    }

    // Agrega cada arista en ambas direcciones (grafo no dirigido)
    for(let i = 0; i < E.length; i++) {
        adj_list[E[i][0]].push([E[i][1], E[i][2]]);
        adj_list[E[i][1]].push([E[i][0], E[i][2]]);
    }

    return adj_list;
}

/**
 * Implementa el algoritmo de Dijkstra para encontrar las distancias más cortas desde un vértice origen
 * 
 * @param {AdjacencyList} graph - Grafo representado como lista de adyacencia
 * @param {number} V - Número de vértices en el grafo
 * @param {number} src - Vértice origen (0 a V-1)
 * @returns {Array<Array<number>>} Array donde cada elemento es [distancia_mínima, vértice_anterior]
 * 
 * @example
 * const src = 0;
 * const distances = djikstra(graph, V, src);
 * // distances[i][0] es la distancia más corta desde src hasta el vértice i
 * // distances[i][1] es el vértice anterior en el camino más corto hasta i
 */
export function djikstra(graph, V, src) {
    // Array de vértices visitados
    let vis = Array(V).fill(0);
    
    // Inicializa distancias como infinito (10000) y vértice anterior como -1
    let dist = [];
    for(let i = 0; i < V; i++) {
        dist.push([10000, -1]);
    }
    dist[src][0] = 0;  // Distancia al origen es 0

    // Procesa todos los vértices
    for(let i = 0; i < V-1; i++) {
        // Encuentra el vértice no visitado con menor distancia
        let mn = -1;
        for(let j = 0; j < V; j++) {
            if(vis[j] === 0) {
                if(mn === -1 || dist[j][0] < dist[mn][0]) {
                    mn = j;
                }
            }
        }

        // Marca el vértice como visitado
        vis[mn] = 1;

        // Actualiza las distancias de los vértices adyacentes
        for(let j = 0; j < graph[mn].length; j++) {
            let edge = graph[mn][j];
            if(vis[edge[0]] === 0 && dist[edge[0]][0] > dist[mn][0] + edge[1]) {
                dist[edge[0]][0] = dist[mn][0] + edge[1];
                dist[edge[0]][1] = mn;
            }
        }
    }

    return dist;
}

// Ejemplo de uso
const src = 0;
const V = 9;
const E = [[0,1,4], [0,7,8], [1,7,11], [1,2,8], [7,8,7], [6,7,1], [2,8,2],
    [6,8,6], [5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];

const graph = createGraph(V, E);
const distances = djikstra(graph, V, 0);
console.log(distances);