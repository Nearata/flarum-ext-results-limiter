import app from 'flarum/forum/app';
import { override } from 'flarum/common/extend';
import PaginatedListState from 'flarum/common/states/PaginatedListState';

app.initializers.add('nearata/results-limiter', () => {
  override(PaginatedListState.prototype, 'loadPage', function (original, page) {
    const reqParams = this.requestParams();

    const include = Array.isArray(reqParams.include) ? reqParams.include.join(',') : reqParams.include;

    const params = {
      ...reqParams,
      page: {
        ...reqParams.page,
        offset: 10 * (page - 1), // changed
      },
      include,
    };

    return app.store.find(this.type, params);
  });
});
