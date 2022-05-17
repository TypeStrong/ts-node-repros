With preferTsExts, nyc's require.extensions setter is disrupted, and code coverage is impacted.

This reproduction uses an admittedly bizarre looking require.extensions hook.  But the point is not
what the hook looks like.  The point is that, whether or not preferTsExts is enabled, the coverage report
should be *identical!*
