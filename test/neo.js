const computeArea = function(A, B, C, D, E, F, G, H) {
    if (D <= F || E >= C || B >= H || G <= A) {
        return (D -B ) * (C -A) + (H -F) * (G - E);
    }

    let left = Math.max(A, E);
    let right = Math.min(C, G);
    let up = Math.max(H, D);
    let down = Math.min(F, B);

    return (D - B) * (C -A) + (H - F) * (G - E) - (up - down) * (right - left);
}


