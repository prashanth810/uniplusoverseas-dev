<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep About, Services, and Blog as independent TanStack leaf routes with structured original-source content separate from presentation, so these pages can evolve without changing the completed homepage.
- Scope inner-page palette and animation styles under `.inner-page` and reuse the existing Reveal utility to avoid homepage changes and duplicate animation dependencies.
- Use SiteLink to resolve the three recreated pages locally while preserving every other original external destination.
