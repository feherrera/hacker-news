/**
 * Represent Items of HackerNews API.
 * It includes Ask, Comment, Job, Poll, Pollopt and Story.
 */
export interface Item {
    id: number;             // All
    deleted?: boolean;      // All (sometimes)
    type: string;           // All
    by: string;             // All
    time: number;           // All
    text?: string;          // Comment - Ask - Job - Poll - Pollopt
    dead?: boolean;         // All (sometimes)
    parent?: number;        // Comment
    poll?: number;          // Pollopt
    kids?: number[];        // Story - Comment - Ask - Poll
    url?: string;           // Story - Ask - Job
    score?: number;         // Story - Ask - Job - Poll - Pollopt
    title?: string;         // Story - Ask - Job - Poll
    parts?: number[];       // Poll
    descendants?: number;   // Story - Ask - Poll
}
